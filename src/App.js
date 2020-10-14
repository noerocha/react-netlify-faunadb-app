import React, { useState, useEffect } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";

function App() {
  const [links, setLinks] = useState([]);
  const loadLinks = async () => {
    try {
      const result = await fetch("/api/getLinks");
      const links = await result.json();

      setLinks(links);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5 ">
      <h1 className="text-center mb-5">List O' Links</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
