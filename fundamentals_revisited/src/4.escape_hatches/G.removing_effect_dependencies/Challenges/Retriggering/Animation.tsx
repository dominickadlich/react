export class FadeInAnimation {
  duration: number | undefined;
  node: HTMLElement | null;
  startTime: number | undefined;
  frameId: number | undefined;

  constructor(node: HTMLElement | null) {
    this.node = node;
  }
  start(duration: number) {
    this.duration = duration;
    if (this.duration === 0) {
      // Jump to end immediately
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // Start animating
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    if (this.startTime === undefined || this.duration === undefined) {
      return;
    }
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress: number) {
    if (this.node === undefined || this.node === null) {
      return;
    }

    this.node.style.opacity = progress.toString();
  }
  stop() {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId);
    }
    this.startTime = undefined;
    this.frameId = undefined;
    this.duration = 0;
  }
}
