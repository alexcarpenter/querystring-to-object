import { compose, fromPairs, map, split, tail } from './utils';

const splitOnEquals = map(split('='));
const splitOnAmpersand = split('&');
const removeQuestionMark = tail;

const querystringToObject = compose(fromPairs, splitOnEquals, splitOnAmpersand, removeQuestionMark);

export default querystringToObject;
