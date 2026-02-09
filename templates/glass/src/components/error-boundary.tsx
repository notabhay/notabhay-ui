import { Component, type ErrorInfo, type ReactNode } from "react";
import { Zap } from "lucide-react";

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
    // Error boundary caught an error — logged by React internally
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex flex-1 items-center justify-center p-8 relative">
            <div className="orb orb-1 top-[30%] left-[40%]" aria-hidden="true" />
            <div className="orb orb-3 bottom-[30%] right-[40%]" aria-hidden="true" />
            <div className="glass rounded-3xl p-10 text-center space-y-4 relative z-10 max-w-md">
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl glass-subtle glass-pulse">
                  <Zap className="h-6 w-6 text-destructive" />
                </div>
              </div>
              <p className="text-xl font-heading text-destructive">Something went wrong</p>
              <p className="text-sm text-muted-foreground">{this.state.error?.message}</p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
