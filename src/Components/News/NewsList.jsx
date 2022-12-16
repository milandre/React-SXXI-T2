import { Card } from 'antd';

export const NewsList = (news) => {

    const { latestNews } = news;

    return (
        <ul className='cards' >
            {latestNews.length > 0 ?
                latestNews.map((element) => {
                    return (
                        <li key={element.id} >
                            <Card size="default" title={element.name} className="individual-card">
                                <div className='card-content'>
                                    <img src={element.image} alt={element.name} className="card-image" />
                                    <div className="info">
                                        <p>{element.content.replace(/<\/?[^>]+>/gi, '')}</p>
                                    </div>
                                </div>
                            </Card>

                        </li>
                    )
                })
                :
                <p>No hay novedades</p>
            }
        </ul>
    );
}