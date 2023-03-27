import { useParams } from 'react-router-dom';
import { useGetAssetByIdQuery } from '../../store/api/assetApi';

// Components
import ButtonLink from '../../components/ButtonLink';
import Layout from '../../components/Layout';

function InfoAsset() {
  const params = useParams();
  const { data: result = { mesagge: '', result: [] } } = useGetAssetByIdQuery(params.id);
  const asset = result.result;

  return (
    <Layout
      href='/asset'
      linkIcon='◀'
      linkText='atras'
      linkTitle='volver a activos'
      title='informacion del activo'
    >
      <ul>
        <li className='flex justify-between'>
          <span>Nombre:</span>
          <span>{asset.name}</span>
        </li>
        <li className='flex justify-between'>
          <span>Tipo:</span>
          <span>{asset.type}</span>
        </li>
        <li className='flex justify-between'>
          <span>Codigo:</span>
          <span>{asset.code || 'no definido'}</span>
        </li>
        <li className='flex justify-between'>
          <span>Marca</span>
          <span>{asset.marca || 'no definido'}</span>
        </li>
        <li className='flex justify-between'>
          <span>Descripción</span>
          <span>{asset.description || 'no definido'}</span>
        </li>
        <li className='flex justify-between'>
          <span>Fecha de compra</span>
          <span>{asset.purchase_date || 'no definido'}</span>
        </li>
      </ul>

      <div className="flex gap-2 justify-end">
        <ButtonLink
          href={`/asset/update_asset/${asset._id}`}
          icon='🖍'
          title='editar'
        >
          editar
        </ButtonLink>

        <ButtonLink
          href={`/asset/delete_asset/${asset._id}`}
          icon='🗑'
          title='eliminar'
        >
          eliminar
        </ButtonLink>
      </div>
    </Layout>
  );
}

export default InfoAsset;
