<?php

interface ServletRequest
{
    public const BASIC_AUTH = "BASIC";
    public const CLIENT_CERT_AUTH = "CLIENT_CERT";
    public const DIGEST_AUTH = "DIGEST";
    public const FORM_AUTH = "FORM";

    public function getAuthType(): string;

    public function getContextPath(): string;

    public function getParameterValues(String $name): array;

    public function getDateHeader(String $name);

    public function getHeader(String $name): string;

    public function getHeaderNames(): array;

    public function getHeaders(String $name): array;

    public function getIntHeader(String $name): int;

    public function getMethod(): string;

    public function getPathInfo(): string;

    public function getPathTranslated(): string;

    public function getQueryString(): string;

    public function getRemoteUser(): string;

    public function getRequestedSessionId(): string;

    public function getRequestURI(): string;

    public function getRequestURL(): string;

    public function getServletPath(): string;

    public function isRequestedSessionIdFromCookie(): bool;

    public function isRequestedSessionIdFromURL(): bool;

    public function isRequestedSessionIdValid(): bool;

    public function isUserInRole(String $role): bool;
}
