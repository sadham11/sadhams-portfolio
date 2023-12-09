import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: any;
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  copyToClipboard(text: string): void {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
  }

  getCurrentTime(): string {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString();
  }

  handleContactClick(event: Event): void {
    event.stopPropagation();
  }
}
