import React from "react";

type ErrorBannerProps = {errorMessage: string}

const ErrorBanner = ({errorMessage}: ErrorBannerProps) => (
  <p>! Error occurred: {errorMessage}</p>
);

export default ErrorBanner;
