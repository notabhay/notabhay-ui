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

  componentDidCatch(error: Error, info: ErrorInfo) {
    void error;
    void info;
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex flex-1 items-center justify-center p-8">
            <div className="text-center space-y-2">
              <p className="text-sm font-heading text-primary">
                {">"} ERROR_CAUGHT
              </p>
              <p className="text-lg font-heading text-destructive">
                {this.state.error?.message}
              </p>
              <p className="text-xs text-muted-foreground font-heading">
                Process terminated. Refresh to restart.
              </p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
