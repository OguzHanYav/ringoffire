import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { MatDialogClose, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";


@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [NgForOf, MatDialogClose, MatDialogTitle, MatButton],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.scss'
})
export class EditPlayerComponent {
  allProfilePicture = ['woman.png', 'man.png'];
  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) { }
}
