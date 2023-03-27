import { useDispatch } from 'react-redux';
import { addAsset } from '../../store/slices/assets/assetsSlice';

import { useNavigate } from 'react-router-dom';

// Components
import FormAsset from '../../components/FormAsset';
import Layout from '../../components/Layout';

function Newasset() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddAsset = (data) => {
    dispatch(addAsset(data));
    navigate('/asset');
  }

  return (
    <Layout
      href='/asset'
      linkIcon='◀'
      linkText='atras'
      linkTitle='volver a activos'
      title='nuevo activo'
    >
      <FormAsset onCreate={handleAddAsset} />
    </Layout>
  );
}

export default Newasset;
