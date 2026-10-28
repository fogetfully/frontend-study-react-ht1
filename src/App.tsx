import FirstScreen from "./components/FirstScreen";
import ProjectList from "./components/ProjectList";
import Request from "./components/Request";
import Footer from "./components/Footer";
// import FirstScrin from "./components/TaskList";

type Project = {
  id: string;
  title: string;
  body: string
}

function App() {
  const label1: string = "РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ";
  const label2: string = "стадионы, газопроводы, мосты, дамбы";
  const defacultProjects: Project[] = [
    { id: "1", title: "Арена", body: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для развития на следующие десятилетия. Мы очень рады данному еву." },
    { id: "2", title: "Арена", body: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для развития на следующие десятилетия. Мы очень рады данному еву." },
    { id: "3", title: "Арена", body: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для развития на следующие десятилетия. Мы очень рады данному еву." },
  ]
  const label3: string = "НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТ";
  const rqLabel1: string = "САМЫЕ УМНЫЕ ПРОЕКТЫ";
  const rqLabel2: string = "РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!";
  const rqLabel3: string = "ВАШ ЗАПРОС";
  const ftLabel1: string = "© 2019 Строительная компания";
  const ftLabel2: string = "Разработано лучшей студей";

  return (
    <>
      <FirstScreen label1={label1} label2={label2} />
      <ProjectList label={label3} projetList={defacultProjects} />
      <Request label1={rqLabel1} label2={rqLabel2} label3={rqLabel3} />
      <Footer label1={ftLabel1} label2={ftLabel2}/>
    </>
  )
}

export default App
