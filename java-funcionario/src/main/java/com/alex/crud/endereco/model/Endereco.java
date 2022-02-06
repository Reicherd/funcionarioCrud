package com.alex.crud.endereco.model;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_ENDERECO")
    private Long id;

    @Column(name="LOGRADOURO", length = 100)
    private String logradouro;

    @Column(name="NUMERO")
    private Long numero;

    @Column(name="CEP", length = 9)
    private String cep;

    @Column(name="CIDADE", length = 45)
    private String cidade;

    @Column(name="BAIRRO", length = 45)
    private String bairro;

    @Column(name="COMPLEMENTO", length = 100)
    private String complemento;
}
