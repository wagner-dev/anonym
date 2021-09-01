import {    
    Body,
    Svg
} from './styled/index'
import ImageSvg from '../../../../../../../assets/svg/pages/home/index.svg'
export default function SvgComponent(){
    return(
        <Body>
            <Svg>
                <img src={ImageSvg} />
            </Svg>
        </Body>
    )
}