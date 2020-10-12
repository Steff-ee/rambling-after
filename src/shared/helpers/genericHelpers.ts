/**
 * Works not just on lists, but also enums
 */
export function doesItemExistInIterable(targetItem: any, list: any): boolean {
	for (const listItemKey in list) {
		if (list[listItemKey] === targetItem) {
			return true
		}
	}

	return false
}
