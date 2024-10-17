import "./App.css";
import { React, useState } from "react";
import { DatePicker } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Modal } from "antd";
import axios from "axios";

const { Search } = Input;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const onSearch_chepaihao = async (value) => {
    console.log("hi222");

    try {
      const response = await axios.post(
        "https://9olowm8rd9.execute-api.us-east-1.amazonaws.com/dev3/post-test",
        {
          aa: "12",
          bb: "123",
        }
      );
      console.log(response.data)
      setResult(response.data);
    } catch (error) {
      console.error("There was an error posting the data!", error);
      // setResult({ error: "Error posting data" });
    } 
    console.log("hi2");

    // try {
    //   const response = await axios.get(
    //     "https://vi26cbtuh6.execute-api.us-east-1.amazonaws.com/s1/fetch-car",
    //     {
    //       params: { 
    //         aa:'123'
    //        },
    //     }
    //   );
    //   setResult(response.data);
    // } catch (error) {
    //   console.error("There was an error fetching the data!", error);
    //   setResult({ error: "Error fetching data" });
    // }

    setIsModalOpen(true);
  };

  const onSearch_xulie = async (value) => {};

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Search
        placeholder="input search text"
        onSearch={onSearch_chepaihao}
        style={{
          width: 200,
        }}
      />
      <div>车号</div>
      <Search
        placeholder="input search text"
        onSearch={onSearch_xulie}
        style={{
          width: 200,
        }}
      />
      <div>序号</div>
    </div>
  );
}

export default App;
