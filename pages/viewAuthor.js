import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
  
  <div class="text-white ms-5 details">
  <h5 class="card-title">${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>   
  <h6>Author Email: <a href="mailto:${obj.email}">${obj.email}</a></h6>
  <p><i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
  <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i></p>      
        <hr>
  <h5>Books</h5>
        
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewAuthor;
