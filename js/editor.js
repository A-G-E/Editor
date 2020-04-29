import * as Fyn from '/node_modules/@fyn-software/component/fyn.js';
import * as Types from '/node_modules/@fyn-software/data/types.js';
import { Direction } from '/node_modules/@fyn-software/suite/js/common/layout/resizable.js';
import { Cell } from '/node_modules/@fyn-software/suite/js/common/layout/docks.js';

const Sizes = Types.Enum.define({
    mobile: { icon: 'mobile-alt', x: '360px', y: '680px' },
    tablet: { icon: 'tablet-alt', x: '768px', y: '1024px' },
    desktop: { icon: 'desktop', x: '1920px', y: '1080px' },
});

export default class Editor extends Fyn.Component
{
    static localName = 'cpb-age-editor';
    static styles = [ 'fyn.suite.base', 'fyn.toolkit.base', 'global.theme' ];

    static get properties()
    {
        return {
            grid: Types.String.default('1fr 150px / 1fr 300px'),
            cells: Types.List.type(Cell).default([
                { area: '1 / 1 / span 1 / span 1' },
                { area: '1 / 2 / span 1 / span 1' },
                { area: '2 / 1 / span 1 / span 2' },
            ]),
            sizes: Sizes,
        };
    }
}
