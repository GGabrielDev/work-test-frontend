export const getToken: () => string | null = () => {
	return localStorage.getItem('token');
}

export const removeToken: () => void = () => {
	localStorage.removeItem('token');
}

export const setToken: (arg0: string) => void = (val) => {
	localStorage.setItem('token', val);
}
