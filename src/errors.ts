import { Response } from 'node-fetch';

/**
 * @category Error
 */
export class RateLimitError extends Error {
    name = 'RateLimitError';

    attempts: number

    response: Response

    constructor(message: string, attempts: number, response: Response) {
        super(message);
        this.attempts = attempts;
        this.response = response;
    }
}

/**
 * @category Error
 */
export class BadRequestError extends Error {
    name = 'BadRequestError';

    response: Response;

    constructor(message: string, response: Response) {
        super(message);
        this.response = response;
    }
}

/**
 * @category Error
 */
export class ForbiddenError extends Error {
    name = 'ForbiddenError';

    response: Response;

    constructor(message: string, response: Response) {
        super(message);
        this.response = response;
    }
}

/**
 * @category Error
 */
export class GoneError extends Error {
    name = 'GoneError';

    response: Response;

    constructor(message: string, response: Response) {
        super(message);
        this.response = response;
    }
}

/**
 * @category Error
 */
export class UnauthorizedError extends Error {
    name = 'UnauthorizedError';

    response: Response;

    constructor(message: string, response: Response) {
        super(message);
        this.response = response;
    }
}

/**
 * @category Error
 */
export class InternalServerError extends Error {
    name = 'InternalServerError';

    response: Response;

    constructor(message: string, response: Response) {
        super(message);
        this.response = response;
    }
}
