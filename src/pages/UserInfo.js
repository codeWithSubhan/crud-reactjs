import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserInfo({ setIsSearch }) {
  const { id } = useParams();

  const data = JSON.parse(window.localStorage.getItem('data'));
  const userData = data.find((item) => +item.id === +id);

  useEffect(() => {
    setIsSearch(window.location.pathname === '/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <th style={{ textAlign: 'start' }}>Name:</th>
              <td>{userData.name}:</td>
            </tr>
            <tr>
              <th style={{ textAlign: 'start' }}>Price:</th>
              <td>${userData.price}:</td>
            </tr>
            <tr>
              <th style={{ textAlign: 'start' }}>Location:</th>
              <td>{userData.address}:</td>
            </tr>
          </tbody>
        </table>
        <img src={userData.image} alt="img" width="150" />
      </div>
    </div>
  );
}

export default UserInfo;
