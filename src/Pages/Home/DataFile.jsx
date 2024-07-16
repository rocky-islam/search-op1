

const DataFile = ({user}) => {
    const {id, name, email, phone, address, website, company} = user;
    // console.log(user);
    // console.log(name);
    return (
        <>
        <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{address.city}</td>
        <td>{website}</td>
        <td>{company.name}</td>
      </tr>
        </>
    );
};

export default DataFile;