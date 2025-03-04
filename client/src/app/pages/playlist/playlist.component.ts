import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared.module';
import { MaterialModule } from '../../../shared/modules/material.module';
import { VideoModule } from '../../../shared/modules/video.module';
import {PlaylistCardComponent} from '../../components/playlist-card/playlist-card.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [SharedModule, MaterialModule, VideoModule, PlaylistCardComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
})
export class PlaylistComponent {}
