import type { EventHookOn, Fn, MaybeComputedRef } from '@vueuse/core';
import type { ComputedRef, Ref } from 'vue';

export interface UseFetchReturn<T> {
	/**
	 * Indicates if the fetch request has finished
	 */
	isFinished: Ref<boolean>;
	/**
	 * The statusCode of the HTTP fetch response
	 */
	statusCode: Ref<number | null>;
	/**
	 * The raw response of the fetch response
	 */
	response: Ref<Response | null>;
	/**
	 * Any fetch errors that may have occurred
	 */
	error: Ref<any>;
	/**
	 * The fetch response body, may either be JSON or text
	 */
	data: Ref<T | null>;
	/**
	 * Indicates if the request is currently being fetched.
	 */
	isFetching: Ref<boolean>;
	/**
	 * Indicates if the fetch request is able to be aborted
	 */
	canAbort: ComputedRef<boolean>;
	/**
	 * Indicates if the fetch request was aborted
	 */
	aborted: Ref<boolean>;
	/**
	 * Abort the fetch request
	 */
	abort: Fn;
	/**
	 * Manually call the fetch
	 * (default not throwing error)
	 */
	execute: (throwOnFailed?: boolean) => Promise<any>;
	/**
	 * Fires after the fetch request has finished
	 */
	onFetchResponse: EventHookOn<Response>;
	/**
	 * Fires after a fetch request error
	 */
	onFetchError: EventHookOn;
	/**
	 * Fires after a fetch has completed
	 */
	onFetchFinally: EventHookOn;
	get(): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
	post(
		payload?: MaybeComputedRef<unknown>,
		type?: string
	): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
	put(
		payload?: MaybeComputedRef<unknown>,
		type?: string
	): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
	delete(
		payload?: MaybeComputedRef<unknown>,
		type?: string
	): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
	patch(
		payload?: MaybeComputedRef<unknown>,
		type?: string
	): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
	head(
		payload?: MaybeComputedRef<unknown>,
		type?: string
	): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
	options(
		payload?: MaybeComputedRef<unknown>,
		type?: string
	): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
	json<JSON = any>(): UseFetchReturn<JSON> & PromiseLike<UseFetchReturn<JSON>>;
	text(): UseFetchReturn<string> & PromiseLike<UseFetchReturn<string>>;
	blob(): UseFetchReturn<Blob> & PromiseLike<UseFetchReturn<Blob>>;
	arrayBuffer(): UseFetchReturn<ArrayBuffer> &
		PromiseLike<UseFetchReturn<ArrayBuffer>>;
	formData(): UseFetchReturn<FormData> & PromiseLike<UseFetchReturn<FormData>>;
}
type Combination = 'overwrite' | 'chain';
export interface BeforeFetchContext {
	/**
	 * The computed url of the current request
	 */
	url: string;
	/**
	 * The request options of the current request
	 */
	options: RequestInit;
	/**
	 * Cancels the current request
	 */
	cancel: Fn;
}
export interface AfterFetchContext<T = any> {
	response: Response;
	data: T | null;
}
export interface OnFetchErrorContext<T = any, E = any> {
	error: E;
	data: T | null;
}
export interface UseFetchOptions {
	/**
	 * Fetch function
	 */
	fetch?: typeof window.fetch;
	/**
	 * Will automatically run fetch when `useFetch` is used
	 *
	 * @default true
	 */
	immediate?: boolean;
	/**
	 * Will automatically refetch when:
	 * - the URL is changed if the URL is a ref
	 * - the payload is changed if the payload is a ref
	 *
	 * @default false
	 */
	refetch?: MaybeComputedRef<boolean>;
	/**
	 * Initial data before the request finished
	 *
	 * @default null
	 */
	initialData?: any;
	/**
	 * Timeout for abort request after number of millisecond
	 * `0` means use browser default
	 *
	 * @default 0
	 */
	timeout?: number;
	/**
	 * Will run immediately before the fetch request is dispatched
	 */
	beforeFetch?: (
		ctx: BeforeFetchContext
	) =>
		| Promise<Partial<BeforeFetchContext> | void>
		| Partial<BeforeFetchContext>
		| void;
	/**
	 * Will run immediately after the fetch request is returned.
	 * Runs after any 2xx response
	 */
	afterFetch?: (
		ctx: AfterFetchContext
	) => Promise<Partial<AfterFetchContext>> | Partial<AfterFetchContext>;
	/**
	 * Will run immediately after the fetch request is returned.
	 * Runs after any 4xx and 5xx response
	 */
	onFetchError?: (ctx: {
		data: any;
		response: Response | null;
		error: any;
	}) => Promise<Partial<OnFetchErrorContext>> | Partial<OnFetchErrorContext>;
}
export interface CreateFetchOptions {
	/**
	 * The base URL that will be prefixed to all urls unless urls are absolute
	 */
	baseUrl?: MaybeComputedRef<string>;
	/**
	 * Determine the inherit behavior for beforeFetch, afterFetch, onFetchError
	 * @default 'chain'
	 */
	combination?: Combination;
	/**
	 * Default Options for the useFetch function
	 */
	options?: UseFetchOptions;
	/**
	 * Options for the fetch request
	 */
	fetchOptions?: RequestInit;
}
export declare function createFetch(
	config?: CreateFetchOptions
): typeof useFetch;
export declare function useFetch<T>(
	url: MaybeComputedRef<string>
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
export declare function useFetch<T>(
	url: MaybeComputedRef<string>,
	useFetchOptions: UseFetchOptions
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
export declare function useFetch<T>(
	url: MaybeComputedRef<string>,
	options: RequestInit,
	useFetchOptions?: UseFetchOptions
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
