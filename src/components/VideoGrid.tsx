import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    thumbnail:'thumbnail.jpg',
    image:'thumb.jpg',
    title:'hank fucks way before | Breaking Bad',
    author:'Heisenberg',
    views:'12M',
    time:'6 years ago',
},{
    thumbnail:'thumbnail.jpg',
    image:'thumb.jpg',
    title:'walter finds out way before | Breaking Bad',
    author:'Heisenberg',
    views:'12M',
    time:'6 years ago',
},{
    thumbnail:'thumbnail.jpg',
    image:'thumb.jpg',
    title:'skyler out way before | Breaking Bad',
    author:'Heisenberg',
    views:'12M',
    time:'6 years ago',
},{
    thumbnail:'thumbnail.jpg',
    image:'thumb.jpg',
    title:'skyler out way before | Breaking Bad',
    author:'Heisenberg',
    views:'12M',
    time:'6 years ago',
},{
    thumbnail:'thumbnail.jpg',
    image:'thumb.jpg',
    title:'skyler out way before | Breaking Bad',
    author:'Heisenberg',
    views:'12M',
    time:'6 years ago',
},{
    thumbnail:'thumbnail.jpg',
    image:'thumb.jpg',
    title:'skyler out way before | Breaking Bad',
    author:'Heisenberg',
    views:'12M',
    time:'6 years ago',
},{
    thumbnail:'thumbnail.jpg',
    image:'thumb.jpg',
    title:'skyler out way before | Breaking Bad',
    author:'Heisenberg',
    views:'12M',
    time:'6 years ago',
},{
    thumbnail:'thumbnail.jpg',
    image:'thumb.jpg',
    title:'skyler out way before | Breaking Bad',
    author:'Heisenberg',
    views:'12M',
    time:'6 years ago',
}]

export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
        {VIDEOS.map((v) => <VideoCard 
            title={v.title}
            image={v.image}
            thumbnail={v.thumbnail}
            author={v.author}
            views={v.views}
            time={v.time}
        />)}
    </div>
}