import React, { useState } from 'react';
import { Table, Badge } from 'react-bootstrap';
import Pagination from './Pagination';

const ArticleList = () => {
  const articles = [
    {
      id: 1,
      title: "East Blue Saga: Romance Dawn",
      status: "Completed",
      chapters: "1-100",
      year: "1997-1999"
    },
    {
      id: 2,
      title: "Arabasta Saga: The Desert Kingdom",
      status: "Completed",
      chapters: "101-217",
      year: "2000-2002"
    },
    {
      id: 3,
      title: "Sky Island Saga: The City in the Sky",
      status: "Completed",
      chapters: "218-302",
      year: "2002-2004"
    },
    {
      id: 4,
      title: "Water 7 Saga: The Shipwrights",
      status: "Completed",
      chapters: "303-441",
      year: "2005-2007"
    },
    {
      id: 5,
      title: "Thriller Bark Saga: The Ghost Island",
      status: "Completed",
      chapters: "442-489",
      year: "2007-2008"
    },
    {
      id: 6,
      title: "Summit War Saga: The Paramount War",
      status: "Completed",
      chapters: "490-597",
      year: "2008-2010"
    },
    {
      id: 7,
      title: "Fish-Man Island Saga: The Underwater Adventure",
      status: "Completed",
      chapters: "598-653",
      year: "2010-2012"
    },
    {
      id: 8,
      title: "Dressrosa Saga: The Colosseum Battle",
      status: "Completed",
      chapters: "654-801",
      year: "2012-2015"
    },
    {
      id: 9,
      title: "Whole Cake Island Saga: The Yonko",
      status: "Completed",
      chapters: "802-902",
      year: "2016-2018"
    },
    {
      id: 10,
      title: "Wano Country Saga: The Land of Samurai",
      status: "Completed",
      chapters: "903-1057",
      year: "2018-2023"
    },
    {
      id: 11,
      title: "Final Saga: The One Piece",
      status: "Ongoing",
      chapters: "1058+",
      year: "2023-Present"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusVariant = (status) => {
    switch(status) {
      case 'Completed':
        return 'success';
      case 'Ongoing':
        return 'warning';
      case 'Archived':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  return (
    <div>
      <h2 className="heading-text">ONE PIECE STORY ARCS</h2>
      
      <Table striped bordered hover responsive className="article-table">
        <thead>
          <tr>
            <th>Story Arc</th>
            <th>Status</th>
            <th>Chapters</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map(article => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>
                <Badge 
                  pill 
                  bg={getStatusVariant(article.status)}
                  text={article.status === 'Ongoing' ? 'dark' : 'white'}
                >
                  {article.status}
                </Badge>
              </td>
              <td>{article.chapters}</td>
              <td>{article.year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Pagination
        itemsPerPage={articlesPerPage}
        totalItems={articles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ArticleList;