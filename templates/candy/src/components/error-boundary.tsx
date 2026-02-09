import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // Error logged by boundary state
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex flex-1 items-center justify-center p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full candy-gradient-bg candy-glow-intense">
                <span className="text-3xl text-white font-heading font-extrabold">!</span>
              </div>
              <p className="text-2xl font-heading font-extrabold text-primary">
                Oops!
              </p>
              <p className="text-sm text-muted-foreground max-w-md">
                {this.state.error?.message}
              </p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
