import _ from "lodash";

_.mul = (...args) => {
	return args.reduce((total, value) => total * value, 1);
};

export default _;
