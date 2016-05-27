import { NEW_CANDIDATE, REMOVE_CANDIDATE} from '../constants';

export function newCandidate(candidate) {
	return {
		type: NEW_CANDIDATE,
		candidate
    }
}

export function removeCandidate(candidate) {
	return {
		type: REMOVE_CANDIDATE,
		candidate
    }
}