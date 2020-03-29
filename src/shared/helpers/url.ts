import { useLocation } from 'react-router'

export const useIsTest = (): boolean => {
	const query = new URLSearchParams(useLocation().search)

	return query.get('test') === 'true'
}
