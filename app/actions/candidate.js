const NEW_CANDIDATE = "NEW_CANDIDATE";
const REMOVE_CANDIDATE = "REMOVE_CANDIDATE";

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