import PropTypes from 'prop-types';
import styled from 'styled-components';
import mergeImages from 'merge-images';
export const Canvas = ({ alpaca, handleRandom }) => {
    const basePath = "/assets/alpaca/"
    const imageType = ".png";
    const saveImage = () => {
        const alpacaImages = []
        Object.keys(alpaca).forEach((part) => {
            if (alpaca[part] !== "none" && alpaca[part] !== "") {
                alpacaImages.push(basePath + `${part}/` + alpaca[part] + imageType)
            }
        }

        )
        //console.log(alpacaImages)
        mergeImages(alpacaImages).then(img => {
            const a = document.createElement("a");
            a.href = img;
            a.download = "Alpaca.png";
            a.click();
        }
        );

    }
    const _renderPart = (part) => {
        if (alpaca[part] !== "none" && alpaca[part] !== "")
            return (
                <StyledImg key={part} src={basePath + `${part}/` + alpaca[part] + imageType} />
            );
    }
    return (

        <div>
            <div id="image">
                {Object.keys(alpaca).map((key) =>
                    _renderPart(key)
                )}

            </div>
            <button onClick={saveImage}>save</button>
            <button onClick={handleRandom}>random</button>
        </div>
    );
}

Canvas.propTypes = {
    alpaca: PropTypes.object
};

const StyledImg = styled.img`
  position: absolute;
  left: 50%;
  right: 50%;
  width: 20%;
  height: 20%;
`;