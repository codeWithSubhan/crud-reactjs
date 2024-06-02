import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Cards from '../ui/Cards';
import Modals from '../components/Modal';
import AddUser from './AddUser';

const customeStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '900px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Dashboard({ filterData, data, setreReder, setIsSearch }) {
  const [isAddUserModal, setIsAddUserModal] = useState(false);

  useEffect(() => {
    setIsSearch(window.location.pathname === '/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'end', marginBottom: '30px' }}>
        <Button onClick={() => setIsAddUserModal(true)}>Add New</Button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filterData?.map((item) => (
          <Cards
            item={item}
            key={item.id}
            data={data}
            setreReder={setreReder}
            setIsSearch={setIsSearch}
          />
        ))}
      </div>

      <Modals
        open={isAddUserModal}
        onClose={() => setIsAddUserModal(false)}
        customeStyle={customeStyle}
      >
        <AddUser
          mt="0"
          setIsAddUserModal={setIsAddUserModal}
          setreReder={setreReder}
          setIsSearch={setIsSearch}
        />
      </Modals>
    </div>
  );
}

export default Dashboard;
