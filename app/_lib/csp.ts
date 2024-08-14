export const generateCsp = () => {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' ${
    process.env.NODE_ENV === "development" ? "unsafe-eval" : ""
  };
    style-src 'self';
    img-src 'self' blob: data:;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  return { nonce, contentSecurityPolicyHeaderValue };
};

// script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
