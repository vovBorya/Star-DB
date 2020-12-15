import React, {useEffect, useState} from "react";
import Loader from "../loader";

const withData = (View) => (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    props.getData().then(setData);
  }, []);

  return data
    ? <View {...props} data={data}/>
    : <Loader />
};

export default withData;