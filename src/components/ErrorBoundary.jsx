function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>
        Something went wrong:
        <pre className="errorMessage">{error.message}</pre>
      </p>
    </div>
  );
}

export default ErrorFallback;
