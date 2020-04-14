import java.util.Enumeration;

public interface ServletRequest {
    public static final String BASIC_AUTH = "BASIC";
    public static final String CLIENT_CERT_AUTH = "CLIENT_CERT";
    public static final String DIGEST_AUTH = "DIGEST";
    public static final String FORM_AUTH = "FORM";

    public String getAuthType();

    public String getContextPath();

    public String[] getParameterValues(String name);

    public long getDateHeader(String name);

    public String getHeader(String name);

    public Enumeration getHeaderNames();

    public Enumeration getHeaders(String name);

    public int getIntHeader(String name);

    public String getMethod();

    public String getPathInfo();

    public String getPathTranslated();

    public String getQueryString();

    public String getRemoteUser();

    public String getRequestedSessionId();

    public String getRequestURI();

    public StringBuffer getRequestURL();

    public String getServletPath();

    public boolean isRequestedSessionIdFromCookie();

    public boolean isRequestedSessionIdFromURL();

    public boolean isRequestedSessionIdValid();

    public boolean isUserInRole(String role);

    public boolean isRequestedSessionIdFromUrl();
}
