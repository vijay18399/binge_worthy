import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'chip-input',
  templateUrl: './chipinput.html',
  styles: [
    `
      .chip-input-container {
        width: 230px;
        position: relative;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 30px 20px 5px 10px;
        margin : 5px;
        .title {
          position: absolute;
          color: gray;
          left: 20px;
          top: 14px;
        }
        .chip-container {
          padding: 5px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          span {
            padding: 5px;
            border-radius: 10px;
            background-color: #3949ab;
            color: white;
            margin: 4px;
            i {
              cursor: pointer;
            }
          }
        }
        .input-container {
          width: 200px;
          margin: 10px;
        }
        .suggestions {
          position: absolute;
          left: 20px;
          bottom: 80px;
          padding: 0px 12px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          max-height: 150px;
          overflow-y: auto;
          width: 185px;
          div {
            padding: 8px 0px;
            cursor: pointer;
            border-bottom: 1px solid gray;
          }
        }
      }
    `,
  ],
})
export class chipInputComponent {
  suggestions = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Superhero',
    'Thriller',
    'War',
    'Western',
  ];

  input: string = '';
  filteredSuggestions: string[] = [];
  showSuggestions: boolean = false;
  @Input() itemFor =""
  @Input() chipInputs:string[] = [];
  @Output() inputChange = new EventEmitter<string[]>();
  removeInput(index: number) {
    this.chipInputs.splice(index, 1);
    this.inputChange.emit(this.chipInputs);
  }
  onEnter() {
    this.addInput();
  }
  addInput(input?: string | undefined) {
    if (!this.input) {
      return;
    }
    if (input && !this.chipInputs.includes(input)) {
      this.chipInputs.push(input);
      this.input = '';
      this.showSuggestions = false;
      return;
    } else if (input && this.chipInputs.includes(input)) {
      return;
    } else {
      this.chipInputs.push(this.input);
      this.input = '';
      this.inputChange.emit(this.chipInputs);
    }
  }

  onKeyUp(event: any) {
    if(this.itemFor=='Tag'){
      return;
    }
    this.filteredSuggestions = this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(this.input.toLowerCase())
    );
    this.showSuggestions = this.input.trim().length >= 1;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const container = document.querySelector('.chip-input-container') as HTMLElement;
    if (!container.contains(target)) {
      this.showSuggestions = false;
    }
  }
}
