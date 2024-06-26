import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise um Contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/"><img src={edit} alt="Edit" /></a>
            <button type="button"><img src={trash} alt="Delete" /></button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
