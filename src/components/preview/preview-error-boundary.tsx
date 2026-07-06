"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

type State = {
  error: Error | null;
};

export class PreviewErrorBoundary extends Component<
  { children: ReactNode; name: string },
  State
> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`预览失败：${this.props.name}`, error, info);
  }

  componentDidUpdate(prevProps: { name: string }) {
    if (prevProps.name !== this.props.name && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-[360px] flex-col items-center justify-center gap-3 rounded-[6px] border border-red-500/20 bg-red-950/20 p-8 text-center text-red-100">
          <div className="text-sm uppercase tracking-[0.24em] text-red-300/70">
            预览失败
          </div>
          <div className="max-w-xl text-sm text-red-100/80">
            {this.state.error.message}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
