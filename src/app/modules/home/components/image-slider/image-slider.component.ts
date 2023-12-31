import { Component, Input } from '@angular/core';
export interface SlideInterface {
  url: string;
  title: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  @Input() slides: SlideInterface[] = [];
  currentIndex: any=0;

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
