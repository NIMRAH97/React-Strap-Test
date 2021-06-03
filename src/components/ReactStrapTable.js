import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
const axios = require('axios')

const ReactStrapTable = (props) => {

  // const [loading , setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [dataId, setDataId] = useState('');
  const [dataName, setDataName] = useState('');

  useEffect(() => {

    const apiCall = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      console.log(res)
      setData(res.data)
    }
    apiCall()

  }, [])
  const addToggle = () => setAddModal(!addModal);
  const deleteToggle = () => setDeleteModal(!deleteModal);
  const editToggle = () => setEditModal(!editModal);

  return (
    <>
      {
        !data
          ?
          <p>
            loading
          </p>
          :
          <Table responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => {
                return (
                  <tr>
                    <th scope="row">{el.id}</th>
                    <td>{el.name}</td>
                    <td>
                      <Button color="danger" onClick={() => {
                        setDataName(el.name)
                        setDataId(el.id)
                        setEditModal(!editModal);
                      }}>Edit</Button>

                      <Button color="danger" onClick={() => {
                        setDataId(el.id)
                        setDeleteModal(!editModal);
                      }}>Delete</Button>
                    </td>
                  </tr>
                )
              })
              }
            </tbody>
          </Table>
      }

      <Button color="danger" onClick={addToggle}>Add</Button>
      <Modal isOpen={addModal} toggle={addToggle}>
        <ModalHeader toggle={addToggle}>Modal title</ModalHeader>
        <ModalBody>
          Add
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addToggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={addToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={deleteModal} toggle={deleteToggle}>
        <ModalHeader toggle={deleteToggle}>Modal title</ModalHeader>
        <ModalBody>
          Are you sure you want to delete name with id: {dataId}?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteToggle}>Yes</Button>{' '}
          <Button color="secondary" onClick={deleteToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={editModal} toggle={editToggle}>
        <ModalHeader toggle={editToggle}>Modal title</ModalHeader>
        <ModalBody>
          Edit: Name is {dataName} with id: {dataId}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editToggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={editToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ReactStrapTable;


// import { Space, Table, Tag } from 'antd';
// import React from 'react';


// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];


// const reactStrapTable = () => {
//   return (
//     <Table columns={columns} dataSource={data} />
//   )
// }

// export default reactStrapTable




    // <div>
    //   <Table responsive>
    //     <thead>
    //       <tr>
    //         <th>id</th>
    //         <th>Name</th>

    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <th scope="row">1</th>
    //         <td>Table cell</td>

    //       </tr>
    //       <tr>
    //         <th scope="row">2</th>
    //         <td>Table cell</td>

    //       </tr>
    //       <tr>
    //         <th scope="row">3</th>
    //         <td>Table cell</td>

    //       </tr>
    //     </tbody>
    //   </Table>
    // </div>