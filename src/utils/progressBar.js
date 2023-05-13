export default function progressBar({ questionLength, index }) {
	return Math.round(((index + 1) / questionLength) * 100)
}
