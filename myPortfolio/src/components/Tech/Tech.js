import { jsx as _jsx } from "react/jsx-runtime";
import BallCanvas from '../Canvas/Ball';
import { SectionWrapper } from '../hoc';
import { technologies } from '../../utils/Constants';
function Tech() {
    return (_jsx("div", { className: 'flex flex-row flex-wrap justify-center gap-10', children: technologies.map((technology) => (_jsx("div", { className: 'w-28 h-28', children: _jsx(BallCanvas, { icon: technology.icon }) }, technology.name))) }));
}
export default SectionWrapper(Tech, '');
