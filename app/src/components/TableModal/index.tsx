import { Modal, TouchableOpacity } from "react-native";
import { Text } from "../Text";

import { Overlay, ModalBody, Header, Form, Input } from './styles';
import { Close } from "../Icons/Close";
import { Button } from "../Button";

export function TableModal() {
  return (
    <Modal transparent>
      <Overlay>
        <ModalBody>
          <Header>
            <Text weight={600}>Informe a mesa</Text>

            <TouchableOpacity>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
            ></Input>

            <Button onPress={() => alert('Ai papai')}>Oi</Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
