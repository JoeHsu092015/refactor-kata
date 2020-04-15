class ServletRequest {
  static get BASIC_AUTH() {
    return 'BASIC';
  }
  static get CLIENT_CERT_AUTH() {
    return 'CLIENT_CERT';
  }
  static get DIGEST_AUTH() {
    return 'DIGEST';
  }

  static get FORM_AUTH() {
    return 'FORM';
  }
  getAuthType() {
    throw new Error('Not implemented');
  }
  getContextPath() {
    throw new Error('Not implemented');
  }
  getParameterValues() {
    throw new Error('Not implemented');
  }
  getDateHeader() {
    throw new Error('Not implemented');
  }
  getHeader() {
    throw new Error('Not implemented');
  }
  getHeaderNames() {
    throw new Error('Not implemented');
  }
  getHeaders() {
    throw new Error('Not implemented');
  }
  getIntHeader() {
    throw new Error('Not implemented');
  }
  getMethod() {
    throw new Error('Not implemented');
  }
  getPathInfo() {
    throw new Error('Not implemented');
  }
  getPathTranslated() {
    throw new Error('Not implemented');
  }
  getQueryString() {
    throw new Error('Not implemented');
  }
  getRemoteUser() {
    throw new Error('Not implemented');
  }
  getRequestedSessionId() {
    throw new Error('Not implemented');
  }
  getRequestURI() {
    throw new Error('Not implemented');
  }
  getRequestURL() {
    throw new Error('Not implemented');
  }
  getServletPath() {
    throw new Error('Not implemented');
  }
  isRequestedSessionIdFromCookie() {
    throw new Error('Not implemented');
  }
  isRequestedSessionIdFromURL() {
    throw new Error('Not implemented');
  }
  isRequestedSessionIdValid() {
    throw new Error('Not implemented');
  }
  isUserInRole() {
    throw new Error('Not implemented');
  }
  isRequestedSessionIdFromUrl() {
    throw new Error('Not implemented');
  }
}

module.exports.ServletRequest = ServletRequest;
