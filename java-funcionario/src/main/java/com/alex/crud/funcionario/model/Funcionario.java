package com.alex.crud.funcionario.model;

import com.alex.crud.endereco.model.Endereco;
import com.alex.crud.enumerators.Genero;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Funcionario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_FUNCIONARIO")
    private Long id;

    @Column(name="MATRICULA", length = 10)
    private String matricula;

    @Column(name="NOME", length = 45)
    private String nome;

    @Column(name="EMAIL", length = 45)
    private String email;

    @Column(name="DATA_NASCIMENTO")
    private LocalDate dataNascimento;

    @Column(name="TELEFONE", length = 11)
    private String telefone;

    @Enumerated(EnumType.STRING)
    @Column(name="GENERO")
    private Genero genero;

    @ManyToOne
    @JoinColumn(name = "ID_ENDERECO")
    private Endereco endereco;
}
