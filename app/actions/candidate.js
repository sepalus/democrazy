import { NEW_CANDIDATE, REMOVE_CANDIDATE} from '../constants';

export function newCandidate(candidate, candidates) {
	return {
		type: NEW_CANDIDATE,
		candidate, candidates
    }
}

export function removeCandidate(candidate) {
	return {
		type: REMOVE_CANDIDATE,
		candidate
    }
}