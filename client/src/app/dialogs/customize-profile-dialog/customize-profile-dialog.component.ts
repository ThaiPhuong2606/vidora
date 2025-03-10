import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatDialogRef} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {MatTextColumn} from '@angular/material/table';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {UserService} from '../../../services/user.service';
import {UserModel} from '../../../models/user.model';
import {user} from '@angular/fire/auth';
import {Store} from '@ngrx/store';
import {updateUserProfile, UserState} from '../../../ngrxs/user/user.state';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {uploadProfilePicture} from '../../../ngrxs/user/user.actions';

@Component({
  selector: 'app-customize-profile-dialog',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    MatFormField,
    MatInput,
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './customize-profile-dialog.component.html',
  styleUrl: './customize-profile-dialog.component.scss'
})
export class CustomizeProfileDialogComponent {
  userProfile$: Observable<UserModel>;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private dialogRef: MatDialogRef<CustomizeProfileDialogComponent>,
    private store: Store<{user: UserState}>,
    private userService: UserService
  ) {
    this.userProfile$ = this.store.select('user','user');
  }

  close(): void {
    this.dialogRef.close();
  }

  onImageClick(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadFile(file);
    }
  }

  uploadFile(file: File): void {
    this.userService.updateProfilePicture(file).subscribe((response) => {
     return this.store.dispatch(uploadProfilePicture({ file }));
    });
  }
}
