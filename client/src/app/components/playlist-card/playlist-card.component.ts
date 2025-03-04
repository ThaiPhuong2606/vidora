import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { MatDialog } from '@angular/material/dialog';
import { EditPlaylistDialogComponent } from '../../dialogs/edit-playlist-dialog/edit-playlist-dialog.component';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [MaterialModule, NgClass],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.scss',
})
export class PlaylistCardComponent {
  playlist = {
    title: 'Playlist 1',
    image:
      'https://i.ytimg.com/vi/a2jNL1Jusi0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC-YRu9VYrK8L8ayV6jwb80hcwD1g',
  };
  readonly dialog = inject(MatDialog);
  showOverlay: boolean = false;

  constructor(private router: Router) {}

  editPlaylist() {
    const dialogRef = this.dialog.open(EditPlaylistDialogComponent);
  }

  onMouseEnter() {
    this.showOverlay = true;
  }

  onMouseLeave() {
    this.showOverlay = false;
  }

  playAll() {
    console.log('Play All clicked');
  }

  viewFullPlaylist() {
    this.router.navigate(['/playlist'], {
      queryParams: { list: 'playlistId' },
    });
  }
}
