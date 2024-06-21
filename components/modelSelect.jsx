import kamienice from "@util/photoimport";
import Card from "./card";
const ModelSelect = (props) => {
  return (
    <div className='flex h-lvh sm:flex-row flex-col items-center m-4'>
      {kamienice.map((e) => {
        return (
          <Card
            key={e.name}
            image={e.kamienica}
            text={e}
            setMasks={props.setMasks}
            setImage={props.setImage}
            startLoading={props.startLoading}
            showcase={props.showcase}
            setErrorAlert={props.setErrorAlert}
          />
        );
      })}
    </div>
  );
};

export default ModelSelect;
