import kamienice from "@util/photoimport";
import Card from "./card";
const ModelSelect = (props) => {
  return (
    <div className='flex h-lvh  items-center m-4'>
      {kamienice.map((kamienica) => {
        return (
          <Card
            key={kamienica}
            image={kamienica}
            text={""}
            setMasks={props.setMasks}
            setImage={props.setImage}
            startLoading={props.startLoading}
          />
        );
      })}
    </div>
  );
};

export default ModelSelect;
