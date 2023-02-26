import React,{useState, useRef, useEffect} from "react";

function App() {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const fetchPhotos = async(pageNumber)=>{
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${Access_Key}&page=${pageNumber}&per_page=10`);
    const data = await res.json()
    console.log(data)
    setPhotos(photo=>[...photo, ...data])
  }

  useEffect(()=>{
    fetchPhotos(pageNumber);
  },[pageNumber])
  
  const loadMore=()=>{
    setPageNumber(prevPageNumber=>prevPageNumber+1)
  }
  return (
    <div className="App">
      <h1>Infinite Scrolling react hooks</h1>
      {
        photos.map((photo,index)=>(
          <div className="photos" key={index}>
            <img src={photo.urls.small} alt=""/>
            <p>{photo.user.first_name + ' '+photo.user.last_name}</p>
            <span>Like : {photo.user.total_likes}</span>
          </div>
        ))
      }
      <div className="loading">
        <div>로딩이미지라고 생각하기~</div>
      </div>

      <h3>{photos.length}</h3>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
}

export default App;
